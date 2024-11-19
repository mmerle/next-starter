// https://www.sanity.io/ui/docs/

import Link from 'next/link';
import { Stack, Card, Flex, Text } from '@sanity/ui';

export function StudioNavbar(props) {
  return (
    <Stack>
      <Card padding={3} tone="brand" borderBottom={true}>
        <Flex justify="space-between">
          <Text>
            <Link href="/">← Back to the site</Link>
          </Text>
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
