import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, ChevronDown, Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { insertContactMessageSchema, type InsertContactMessage } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';

import { Navigation } from '@/components/Navigation';
import { TypingAnimation } from '@/components/TypingAnimation';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { SkillBar } from '@/components/SkillBar';
import { Portfolio } from '@/components/Portfolio';

const skills = [
  { name: 'React.js', percentage: 95 },
  { name: 'Node.js', percentage: 90 },
  { name: 'TypeScript', percentage: 88 },
  { name: 'Python', percentage: 85 },
  { name: 'AWS/Cloud', percentage: 82 },
  { name: 'MongoDB', percentage: 80 }
];

const technologies = [
  'React', 'Node.js', 'TypeScript', 'Next.js', 'Express', 
  'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL'
];

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    period: '2022 - Present',
    description: 'Leading a team of 5 developers in building scalable web applications using React, Node.js, and AWS. Implemented CI/CD pipelines and reduced deployment time by 60%.',
    technologies: ['React', 'Node.js', 'AWS', 'Team Leadership']
  },
  {
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description: 'Developed and maintained multiple web applications for fintech clients. Built RESTful APIs, implemented real-time features, and optimized database performance.',
    technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Socket.io']
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Agency Pro',
    period: '2019 - 2020',
    description: 'Created responsive websites and web applications for various clients. Focused on user experience, performance optimization, and modern JavaScript frameworks.',
    technologies: ['JavaScript', 'React', 'SASS', 'Webpack']
  },
  {
    title: 'Junior Web Developer',
    company: 'WebSolutions Inc',
    period: '2018 - 2019',
    description: 'Started my professional journey building static websites and learning modern web development practices. Gained experience in HTML, CSS, JavaScript, and basic backend development.',
    technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'MySQL']
  }
];

export default function Home() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message sent successfully!",
        description: data.message,
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-noise-bg cyber-grid">
        {/* Floating gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
        </div>
        
        {/* Particle System */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 15 + 's',
                animationDuration: (Math.random() * 10 + 10) + 's'
              }}
            />
          ))}
        </div>
        
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-500 rounded-full opacity-20 blur-sm"
            animate={{ 
              y: [-30, 30, -30], 
              x: [-10, 10, -10],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/3 right-1/4 w-12 h-12 bg-purple-500 rounded-full opacity-15 blur-md"
            animate={{ 
              y: [40, -40, 40], 
              x: [15, -15, 15],
              scale: [0.8, 1.3, 0.8],
              rotate: [360, 0, 360]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-green-400 rounded-full opacity-25 blur-sm"
            animate={{ 
              y: [-25, 25, -25], 
              x: [-20, 20, -20],
              scale: [1.1, 0.9, 1.1],
              rotate: [0, 270, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
          <motion.div 
            className="absolute top-2/3 right-1/3 w-4 h-4 bg-pink-400 rounded-full opacity-30 blur-sm"
            animate={{ 
              y: [35, -35, 35], 
              x: [25, -25, 25],
              scale: [0.9, 1.4, 0.9]
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gray-800 dark:text-white">Hi, I'm </span>
              <span className="portfolio-primary neon-glow">Alex Johnson</span>
            </motion.h1>
            
            <div className="text-2xl md:text-4xl font-medium mb-8 h-16 flex items-center justify-center">
              <TypingAnimation 
                text="Full Stack Developer" 
                className="text-gray-600 dark:text-gray-300"
                speed={150}
              />
            </div>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Passionate about creating exceptional digital experiences with modern technologies. 
              Specializing in React, Node.js, and cloud solutions.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="px-8 py-4 text-white rounded-xl btn-holographic border-0 text-lg font-semibold">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, rotateX: -5, rotateY: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('#portfolio')}
                  className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl holographic-card text-lg font-semibold backdrop-blur-sm"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  View Portfolio
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Statistics */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="text-center">
                <AnimatedCounter target={50} />
                <div className="text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <AnimatedCounter target={5} />
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <AnimatedCounter target={30} />
                <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <AnimatedCounter target={100} suffix="%" />
                <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-2xl portfolio-primary" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[hsl(47,25%,95%)] dark:bg-gray-900 mesh-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-24 h-1 portfolio-bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              I'm a passionate full-stack developer with expertise in modern web technologies and a love for creating innovative solutions.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With over 5 years of experience in web development, I've had the privilege of working with 
                startups and established companies to bring their digital visions to life. My expertise spans 
                across front-end frameworks like React and Vue.js, back-end technologies including Node.js 
                and Python, and cloud platforms like AWS and Azure.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and following best practices. When I'm not coding, 
                you can find me exploring new technologies, contributing to open-source projects, or mentoring 
                aspiring developers.
              </p>
              
              {/* Personal Info */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div>
                  <span className="font-semibold portfolio-primary">Location:</span>
                  <span className="text-gray-600 dark:text-gray-300"> San Francisco, CA</span>
                </div>
                <div>
                  <span className="font-semibold portfolio-primary">Email:</span>
                  <span className="text-gray-600 dark:text-gray-300"> alex@example.com</span>
                </div>
                <div>
                  <span className="font-semibold portfolio-primary">Education:</span>
                  <span className="text-gray-600 dark:text-gray-300"> BS Computer Science</span>
                </div>
                <div>
                  <span className="font-semibold portfolio-primary">Languages:</span>
                  <span className="text-gray-600 dark:text-gray-300"> English, Spanish</span>
                </div>
              </div>
            </motion.div>
            
            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <SkillBar 
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.percentage}
                    delay={index * 0.1}
                  />
                ))}
              </div>
              
              {/* Technology Stack */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Technologies I Work With</h4>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech) => (
                    <motion.span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-[hsl(47,25%,95%)] dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
            <div className="w-24 h-1 portfolio-bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My professional journey and the amazing companies I've had the pleasure to work with.
            </p>
          </motion.div>
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full portfolio-bg-primary hidden md:block"></div>
            
            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <Card className="portfolio-light-gray shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold portfolio-primary mb-2">{exp.title}</h3>
                        <h4 className="text-lg font-medium mb-2">{exp.company}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">{exp.period}</p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0 w-4 h-4 portfolio-bg-primary rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block"></div>
                  
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                    {/* Empty space for alternating layout */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 portfolio-light-gray gradient-noise-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 portfolio-bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how I can help bring your ideas to life.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Start a Conversation</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you need a complete web application, API development, or technical consultation, 
                  I'd love to hear about your project.
                </p>
              </div>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">alex.johnson@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-gray-600 dark:text-gray-300">San Francisco, CA</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Response Time</h4>
                    <p className="text-gray-600 dark:text-gray-300">Within 24 hours</p>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-lg mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: '#' },
                    { icon: Linkedin, href: '#' },
                    { icon: Twitter, href: '#' },
                    { icon: Instagram, href: '#' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 portfolio-bg-primary text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="portfolio-dark-card shadow-lg holographic-card card-3d">
                <CardContent className="p-8">
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          {...form.register('firstName')}
                          placeholder="John"
                          className="mt-2"
                        />
                        {form.formState.errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.firstName.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          {...form.register('lastName')}
                          placeholder="Doe"
                          className="mt-2"
                        />
                        {form.formState.errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">
                            {form.formState.errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        {...form.register('email')}
                        placeholder="john.doe@example.com"
                        className="mt-2"
                      />
                      {form.formState.errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        {...form.register('subject')}
                        placeholder="Project Discussion"
                        className="mt-2"
                      />
                      {form.formState.errors.subject && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.subject.message}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        {...form.register('message')}
                        placeholder="Tell me about your project..."
                        className="mt-2"
                      />
                      {form.formState.errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.message.message}
                        </p>
                      )}
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={contactMutation.isPending}
                        className="w-full text-white btn-holographic border-0 py-3 text-lg font-semibold"
                      >
                        {contactMutation.isPending ? (
                          'Sending...'
                        ) : (
                          <>
                            <Mail className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Footer Brand */}
            <div>
              <h3 className="text-2xl font-bold portfolio-primary mb-4">Alex Johnson</h3>
              <p className="text-gray-300 mb-4">
                Full Stack Developer passionate about creating exceptional digital experiences 
                with modern technologies and best practices.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Instagram, href: '#' }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['#home', '#about', '#portfolio', '#experience', '#contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link)}
                      className="text-gray-300 hover:text-primary transition-colors duration-200"
                    >
                      {link.replace('#', '').charAt(0).toUpperCase() + link.slice(2)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <p className="text-gray-300 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  alex.johnson@example.com
                </p>
                <p className="text-gray-300 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (555) 123-4567
                </p>
                <p className="text-gray-300 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              &copy; 2024 Alex Johnson. All rights reserved. Built with ❤️ using React, Node.js, and Material UI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
