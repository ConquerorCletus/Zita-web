import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a3c8b] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zita Tess Tech Ltd</h3>
            <p className="text-sm">
              Your trusted partner for generators, tractors, Geely motors, and Mikano products.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Phone size={18} />
                <span>+234 XXX XXX XXXX</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@zitatesstech.com</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Lagos, Nigeria</span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-700">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Zita Tess Tech Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;