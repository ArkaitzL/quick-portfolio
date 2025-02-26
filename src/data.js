import {
  CodeBracketIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  DocumentIcon,
  PencilIcon,
  EnvelopeIcon,
  ArchiveBoxXMarkIcon,  // Añadido el icono faltante
} from '@heroicons/vue/24/outline';

// Mapea los iconos con sus nombres
const icons = {
  'code-bracket': CodeBracketIcon,
  'briefcase': BriefcaseIcon,
  'chat-bubble-left-right': ChatBubbleLeftRightIcon,
  'document': DocumentIcon,
  'pencil': PencilIcon,
  'envelope': EnvelopeIcon,
  'archive-box-x-mark': ArchiveBoxXMarkIcon,  // Añadido el icono faltante
};

export default icons;

// Array de enlaces utilizando el objeto de iconos
export const links = [
  { name: 'GitHub', url: 'https://github.com/ArkaitzL', icon: 'code-bracket' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/arkaitz-leon-3a834926a/', icon: 'briefcase' },
  { name: 'Gitfolio', url: 'https://github.arkaitz.me/', icon: 'archive-box-x-mark' },
  { name: 'Itch.io', url: 'https://baboongamesoficial.itch.io/', icon: 'pencil' },
  { name: 'Portfolio', url: 'https://arkaitz.me/', icon: 'document' },
  { name: 'Contact', url: '#', icon: 'envelope' },
];
