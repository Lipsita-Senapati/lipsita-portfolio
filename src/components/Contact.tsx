
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Let's Work Together
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-8"></div>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Ready to build something amazing? I'm always excited to collaborate on innovative AI projects 
          and help bring your ideas to life.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-cyan-400" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-slate-300 text-sm">lipsita3108@gmail.com</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-green-400" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-slate-300 text-sm">+91 7327078940</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-purple-400" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-slate-300 text-sm">Bengaluru, India</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <CardContent className="p-6 text-center">
              <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-slate-300 text-sm">Connect with me</p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-12 py-6 text-xl rounded-full transform transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-lg"
            onClick={() => window.open('https://www.linkedin.com/in/lipsita-senapati/', '_blank')}
          >
            <Linkedin className="w-6 h-6 mr-3" />
            Let's Work Together
          </Button>
          <p className="text-slate-400 text-sm">
            Click to connect on LinkedIn and start the conversation
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
