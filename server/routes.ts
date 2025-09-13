import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {


  // Simple contact email endpoint
  app.post("/api/send-contact-email", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Create email content
      const emailContent = {
        to: 'sroopesh242@gmail.com',
        from: email,
        fromName: name,
        subject: `Contact Form: ${subject}`,
        message: message,
        timestamp: new Date().toLocaleString()
      };

      // Log the email details
      console.log('📧 NEW CONTACT MESSAGE:');
      console.log('=====================================');
      console.log(`To: ${emailContent.to}`);
      console.log(`From: ${emailContent.fromName} <${emailContent.from}>`);
      console.log(`Subject: ${emailContent.subject}`);
      console.log(`Date: ${emailContent.timestamp}`);
      console.log(`Message: ${emailContent.message}`);
      console.log('=====================================');

      // Send email via Web3Forms
      try {
        const webhookResponse = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: '31d04f16-4710-4f2d-bc44-fc8da7f3cbb2',
            name: name,
            email: email,
            subject: `Contact Form: ${subject}`,
            message: `From: ${name} (${email})\n\nSubject: ${subject}\n\nMessage:\n${message}`,
            to: 'sroopesh242@gmail.com'
          })
        });

        if (webhookResponse.ok) {
          const result = await webhookResponse.json();
          console.log('📧 Email sent successfully via Web3Forms:', result);
          res.json({ 
            success: true, 
            message: "Message sent successfully to sroopesh242@gmail.com! Check your inbox."
          });
          return;
        } else {
          console.log('Web3Forms error:', await webhookResponse.text());
        }
      } catch (webhookError) {
        console.log('Web3Forms service error:', webhookError);
      }

      // Success response
      res.json({ 
        success: true, 
        message: "Message received successfully! Check server console for details."
      });
    } catch (error) {
      console.error('Email processing error:', error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to process message" 
      });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
