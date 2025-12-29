import React from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  Eye,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { insertContactMessageSchema, type InsertContactMessage } from '@shared/schema';
import { sendEmail } from '@/lib/emailService';

import { Navigation } from '@/components/Navigation';
import { TypingAnimation } from '@/components/TypingAnimation';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { SkillBar } from '@/components/SkillBar';
import { Portfolio } from '@/components/Portfolio';

const skills = [
  { name: 'React.js', percentage: 95 },
  { name: 'Node.js', percentage: 90 },
  { name: 'JavaScript', percentage: 88 },
  { name: 'Python', percentage: 60 },
  { name: 'AWS/Cloud', percentage: 82 },
  { name: 'MongoDB', percentage: 80 },
];

const technologies = [
  'React',
  'Node.js',
  'JavaScript',
  'Express',
  'MongoDB',
  'SQL',
  'AWS/Azure',
  'Jenkins',
];

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'HCLTech, Benguluru',
    period: '2023 - present',
    description:
      'Created responsive websites and web applications for various clients. Focused on user experience, performance optimization, and modern JavaScript frameworks.',
    technologies: ['JavaScript', 'React', 'MobX', 'Micro Frontend'],
  },
  {
    title: 'Junior Web Developer',
    company: 'HCLTech, Noida',
    period: '2022 - 2023',
    description:
      'Started my professional journey building static websites and learning modern web development practices. Gained experience in HTML, CSS, JavaScript, and basic backend development.',
    technologies: ['HTML/CSS', 'JavaScript', 'MySQL'],
  },
];

export default function Home() {
  const { toast } = useToast();

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: InsertContactMessage) => {
    setIsSubmitting(true);

    try {
      const emailSent = await sendEmail({
        name: `${data.firstName} ${data.lastName}`.trim(),
        email: data.email,
        subject: data.subject,
        message: data.message,
      });

      if (emailSent) {
        toast({
          title: 'Message sent successfully!',
          description: 'Thank you for your message! I will get back to you soon.',
        });
        form.reset();
      } else {
        toast({
          title: 'Error',
          description: 'Failed to send message. Please try again.',
          variant: 'destructive',
        });
      }
    } catch {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
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
      <section
        id="home"
        className="gradient-noise-bg cyber-grid relative flex min-h-screen items-center justify-center overflow-hidden"
      >
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
                animationDuration: Math.random() * 10 + 10 + 's',
              }}
            />
          ))}
        </div>

        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute left-1/4 top-1/4 h-8 w-8 rounded-full bg-blue-500 opacity-20 blur-sm"
            animate={{
              y: [-30, 30, -30],
              x: [-10, 10, -10],
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute right-1/4 top-1/3 h-12 w-12 rounded-full bg-purple-500 opacity-15 blur-md"
            animate={{
              y: [40, -40, 40],
              x: [15, -15, 15],
              scale: [0.8, 1.3, 0.8],
              rotate: [360, 0, 360],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 h-6 w-6 rounded-full bg-green-400 opacity-25 blur-sm"
            animate={{
              y: [-25, 25, -25],
              x: [-20, 20, -20],
              scale: [1.1, 0.9, 1.1],
              rotate: [0, 270, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          />
          <motion.div
            className="absolute right-1/3 top-2/3 h-4 w-4 rounded-full bg-pink-400 opacity-30 blur-sm"
            animate={{
              y: [35, -35, 35],
              x: [25, -25, 25],
              scale: [0.9, 1.4, 0.9],
            }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
        </div>

        <div className="z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="font-display mb-6 text-5xl font-bold md:text-7xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gray-800 dark:text-white">Hey, I&apos;m </span>
              <span className="portfolio-primary neon-glow">Roopesh S</span>
            </motion.h1>

            <div className="font-inter mb-8 flex h-16 items-center justify-center text-2xl font-medium md:text-4xl">
              <TypingAnimation
                text="Full Stack Developer"
                className="font-mono text-gray-600 dark:text-gray-300"
                speed={150}
              />
            </div>

            <motion.p
              className="font-inter mx-auto mb-12 max-w-3xl text-xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Passionate about creating exceptional digital experiences with modern technologies.
              Specializing in React, Node.js, and cloud solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="btn-holographic font-inter rounded-xl border-0 px-8 py-4 text-lg font-semibold text-white"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/Roopesh CV.pdf';
                    link.download = 'Roopesh_CV.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
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
                  className="holographic-card font-inter rounded-xl border-2 border-primary px-8 py-4 text-lg font-semibold text-primary backdrop-blur-sm hover:bg-primary hover:text-white"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  View Portfolio
                </Button>
              </motion.div>
            </motion.div>

            {/* Statistics */}
            <motion.div
              className="grid grid-cols-2 gap-8 md:grid-cols-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="text-center">
                <AnimatedCounter target={23} />
                <div className="font-inter text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <AnimatedCounter target={3} />
                <div className="font-inter text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <AnimatedCounter target={16} />
                <div className="font-inter text-gray-600 dark:text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <AnimatedCounter target={100} suffix="%" />
                <div className="font-inter text-gray-600 dark:text-gray-400">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="portfolio-primary text-2xl" />
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="mesh-gradient relative overflow-hidden bg-[hsl(47,25%,95%)] py-20 dark:bg-gray-900"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">About Me</h2>
            <div className="portfolio-bg-primary mx-auto mb-8 h-1 w-24"></div>
            <p className="font-inter mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              I&apos;m a passionate full-stack developer with expertise in modern web technologies
              and a love for creating innovative solutions.
            </p>
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* About Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="mb-4 text-2xl font-semibold">My Journey</h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                With over 3+ years of hands-on experience across the software lifecycle - from
                building responsive React UIs to developing scalable Flask APIs, managing MongoDB
                databases. I’ve contributed to production systems across frontend and backend,
                writing clean, testable code that improved usability, performance, and stakeholder
                satisfaction. I thrive on thoughtful questions, patient debugging, and teams where
                learning and impact matter as much as the code.
              </p>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                I believe in writing clean, maintainable code and following best practices. When
                I&apos;m not coding, you can find me exploring new technologies, contributing to
                open-source projects, or mentoring aspiring developers.
              </p>

              {/* Personal Info */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div>
                  <span className="portfolio-primary font-semibold">Location:</span>
                  <span className="text-gray-600 dark:text-gray-300">Benguluru, India</span>
                </div>
                <div>
                  <span className="portfolio-primary font-semibold">Email:</span>
                  <span className="text-gray-600 dark:text-gray-300">sroopesh242@gmail.com</span>
                </div>
                <div>
                  <span className="portfolio-primary font-semibold">Education:</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    Electronics and Communication Engineering
                  </span>
                </div>
                <div>
                  <span className="portfolio-primary font-semibold">Languages:</span>
                  <span className="text-gray-600 dark:text-gray-300"> English, Telugu, Tamil</span>
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
              <h3 className="mb-6 text-2xl font-semibold">Technical Skills</h3>
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
                <h4 className="mb-4 text-lg font-semibold">Technologies I Work With</h4>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="bg-primary/10 rounded-full px-3 py-1 text-sm text-primary"
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
      <section id="experience" className="bg-[hsl(47,25%,95%)] py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">Experience</h2>
            <div className="portfolio-bg-primary mx-auto mb-8 h-1 w-24"></div>
            <p className="font-inter mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              My professional journey and the amazing companies I&apos;ve had the pleasure to work
              with.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="portfolio-bg-primary absolute left-1/2 hidden h-full w-1 -translate-x-1/2 transform md:block"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col items-center md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div
                    className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}
                  >
                    <Card className="portfolio-light-gray shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="portfolio-primary font-display mb-2 text-xl font-semibold">
                          {exp.title}
                        </h3>
                        <h4 className="font-inter mb-2 text-lg font-medium">{exp.company}</h4>
                        <p className="mb-3 font-mono text-gray-600 dark:text-gray-300">
                          {exp.period}
                        </p>
                        <p className="font-inter mb-4 text-gray-600 dark:text-gray-300">
                          {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-primary/10 rounded px-2 py-1 text-xs text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="portfolio-bg-primary relative hidden h-4 w-4 flex-shrink-0 rounded-full border-4 border-[hsl(47,25%,95%)] shadow-lg dark:border-gray-900 md:block"></div>

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
      <section
        id="contact"
        className="portfolio-light-gray gradient-noise-bg relative overflow-hidden py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display mb-4 text-4xl font-bold md:text-5xl">Get In Touch</h2>
            <div className="portfolio-bg-primary mx-auto mb-8 h-1 w-24"></div>
            <p className="font-inter mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
              Ready to start your next project? Let&apos;s discuss how I can help bring your ideas
              to life.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="font-display mb-6 text-2xl font-semibold">
                  Let&apos;s Start a Conversation
                </h3>
                <p className="font-inter mb-8 text-gray-600 dark:text-gray-300">
                  I&apos;m always interested in new opportunities and exciting projects. Whether you
                  need a complete web application, API development, or technical consultation,
                  I&apos;d love to hear about your project.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                    <Mail className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-inter text-lg font-semibold">Email</h4>
                    <p className="font-mono text-gray-600 dark:text-gray-300">
                      sroopesh242@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                    <Phone className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-inter text-lg font-semibold">Phone</h4>
                    <p className="font-mono text-gray-600 dark:text-gray-300">+91 833092 0063</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                    <MapPin className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-inter text-lg font-semibold">Location</h4>
                    <p className="font-inter text-gray-600 dark:text-gray-300">Benguluru, India</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                    <Clock className="text-xl text-primary" />
                  </div>
                  <div>
                    <h4 className="font-inter text-lg font-semibold">Response Time</h4>
                    <p className="font-inter text-gray-600 dark:text-gray-300">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-inter mb-4 text-lg font-semibold">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: 'https://github.com/roopesh234' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/roopesh234/' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="portfolio-bg-primary flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors duration-200 hover:bg-blue-700"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon className="h-5 w-5" />
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
              <Card className="portfolio-dark-card holographic-card card-3d shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          {...form.register('firstName')}
                          placeholder="Roopesh"
                          className="mt-2"
                        />
                        {form.formState.errors.firstName && (
                          <p className="mt-1 text-sm text-red-500">
                            {form.formState.errors.firstName.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          {...form.register('lastName')}
                          placeholder="Shan"
                          className="mt-2"
                        />
                        {form.formState.errors.lastName && (
                          <p className="mt-1 text-sm text-red-500">
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
                        placeholder="roopesh.shan@example.com"
                        className="mt-2"
                      />
                      {form.formState.errors.email && (
                        <p className="mt-1 text-sm text-red-500">
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
                        <p className="mt-1 text-sm text-red-500">
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
                        <p className="mt-1 text-sm text-red-500">
                          {form.formState.errors.message.message}
                        </p>
                      )}
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-holographic w-full border-0 py-3 text-lg font-semibold text-white"
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            <Mail className="mr-2 h-5 w-5" />
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
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Footer Brand */}
            <div>
              <h3 className="portfolio-primary mb-4 text-2xl font-bold">Roopesh S</h3>
              <p className="mb-4 text-gray-300">
                Full Stack Developer passionate about creating exceptional digital experiences with
                modern technologies and best practices.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: 'https://github.com/roopesh234' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/roopesh234/' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="text-gray-300 transition-colors duration-200 hover:text-primary"
                    whileHover={{ scale: 1.1 }}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                {['#home', '#about', '#portfolio', '#experience', '#contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link)}
                      className="text-gray-300 transition-colors duration-200 hover:text-primary"
                    >
                      {link.replace('#', '').charAt(0).toUpperCase() + link.slice(2)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4 text-lg font-semibold">Contact Info</h4>
              <div className="space-y-2">
                <p className="flex items-center text-gray-300">
                  <Mail className="mr-2 h-4 w-4" />
                  sroopesh242@gmail.com
                </p>
                <p className="flex items-center text-gray-300">
                  <Phone className="mr-2 h-4 w-4" />
                  +91 83309 20063
                </p>
                <p className="flex items-center text-gray-300">
                  <MapPin className="mr-2 h-4 w-4" />
                  Benguluru, India
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-300">
              &copy; 2024 Roopesh S. All rights reserved. Built with ❤️ using React, Node.js, and
              Material UI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
