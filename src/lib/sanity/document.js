import { EyeOpenIcon } from '@sanity/icons';

export function CustomBadge(props) {
  return {
    label: 'Custom Badge',
    title: 'Hello I am a custom document badge',
    color: 'primary',
  };
}

export function CustomAction(props) {
  return {
    label: 'Custom Action',
    icon: EyeOpenIcon,
    onHandle: () => {
      window.alert('👋 Hello from custom action');
    },
  };
}
