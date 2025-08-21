'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export default function ImageModal({ 
  isOpen, 
  onClose, 
  imageSrc, 
  imageAlt, 
  title, 
  description 
}: ImageModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 rounded-full p-2 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-primary mb-4">{title}</h3>
                  <p className="text-lg text-secondary leading-relaxed">{description}</p>
                </div>
                
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button
                    onClick={onClose}
                    className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
