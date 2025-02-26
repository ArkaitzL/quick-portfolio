import {
  CodeBracketIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  DocumentIcon,
  PencilIcon,
  EnvelopeIcon,
  ArchiveBoxXMarkIcon,
  PuzzlePieceIcon, // Importamos el icono de puzzle
} from '@heroicons/vue/24/outline';

const icons = {
  'code-bracket': CodeBracketIcon,
  'briefcase': BriefcaseIcon,
  'chat-bubble-left-right': ChatBubbleLeftRightIcon, 
  'document': DocumentIcon,
  'pencil': PencilIcon,
  'envelope': EnvelopeIcon,
  'archive-box-x-mark': ArchiveBoxXMarkIcon,
  'puzzle-piece': PuzzlePieceIcon, 
};

export default icons;

export const links = [
  { name: 'GitHub', url: 'https://github.com/ArkaitzL', icon: 'code-bracket' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/arkaitz-leon-3a834926a/', icon: 'briefcase' },
  { name: 'Gitfolio', url: 'https://github.arkaitz.me/', icon: 'archive-box-x-mark' },
  { name: 'Itch.io', url: 'https://baboongamesoficial.itch.io/', icon: 'puzzle-piece' }, 
  { name: 'Portfolio', url: 'https://arkaitz.me/', icon: 'document' },
  { name: 'Contacto', url: '#', icon: 'envelope' },
];
