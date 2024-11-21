// https://www.sanity.io/ui/docs/

import Link from 'next/link';
import { Stack, Card, Flex, Text, Button, Box } from '@sanity/ui';
import { loadSettings } from '../utils';
import { useState, useEffect } from 'react';

export function StudioNavbar(props) {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    async function fetchSettings() {
      try {
        const fetchedSettings = await loadSettings();
        setSettings(fetchedSettings);
      } catch (error) {
        console.error('Failed to load settings:', error);
      }
    }

    fetchSettings();
  }, []);

  return (
    <Stack>
      <Card padding={3} tone="brand" borderBottom={true}>
        <Flex justify="space-between" align="center">
          <Text>
            <Link href="/">← Back to the site</Link>
          </Text>
          <Flex gap={2}>
            {settings?.studioUi?.externalLinks?.map((link) => (
              <Button
                key={link._key}
                as="a"
                href={link.href}
                {...(link.openInNewTab && { target: '_blank' })}
                mode="ghost"
                text={link.label}
              />
            ))}
          </Flex>
        </Flex>
      </Card>
      <>{props.renderDefault(props)}</>
    </Stack>
  );
}

// export function ToolMenu(props) {
//   const { tools, renderDefault } = props;
//   const structureTool = tools.find(({ name }) => name == 'desk');
//   const otherTools = tools.filter(({ name }) => name != 'desk');
//
//   if (!structureTool) {
//     return renderDefault(props);
//   }
//
//   return props.renderDefault({
//     ...props,
//     tools: [structureTool, ...otherTools],
//   });
// }
