import { Box, Button, Card, Flex, Spinner, Text, ThemeProvider } from '@sanity/ui';
import { AiOutlineReload } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { useCallback, useEffect, useRef, useState } from 'react';
import { resolvePreviewUrl } from './resolvePreviewUrl';
import { UserViewComponent } from 'sanity/desk';
import debounce from 'lodash.debounce';

export const PreviewIFrame: UserViewComponent = (props) => {
  const isReloadEnabled = false;
  const { document, options } = props;
  const [id, setId] = useState(1);
  const { displayed: currentDocument } = document;
  const [privateUrl, setPrivateUrl] = useState('');
  const [publicUrl, setPublicUrl] = useState('');
  const iframe = useRef<HTMLIFrameElement>(null);
  const baseUrl = window.location.origin;

  const reloadIframe = () => {
    const iframeNode = iframe.current;

    if (!iframeNode || !iframeNode.contentWindow) return null;

    const iframeWindow = iframeNode.contentWindow;

    iframeWindow.location.reload();
  };
  const debouncedChangeHandler = useCallback(debounce(reloadIframe, 500), []);

  useEffect(() => {
    if (debouncedChangeHandler && isReloadEnabled) {
      debouncedChangeHandler();
    }
  }, [currentDocument._updatedAt, debouncedChangeHandler]);

  function handleReload() {
    if (!iframe?.current) return;
    setId(id + 1);
  }

  useEffect(() => {
    (async () => {
      const { privateUrl, publicUrl } = (await resolvePreviewUrl(currentDocument, options.client, baseUrl)) ?? {};
      setPrivateUrl(privateUrl);
      setPublicUrl(publicUrl);
    })();
  }, [currentDocument]);

  if (privateUrl === '')
    return (
      <ThemeProvider>
        <Flex padding={5} align="center" justify="center">
          <Spinner />
        </Flex>
      </ThemeProvider>
    );

  return (
    <ThemeProvider>
      <Flex direction="column" style={{ height: `100%` }}>
        <Card padding={2} borderBottom>
          <Flex align="center" gap={2}>
            <Box flex={1}>
              <Text size={0} textOverflow="ellipsis">
                {publicUrl}
              </Text>
            </Box>
            <Flex align="center" gap={1}>
              <Button
                fontSize={[1]}
                padding={2}
                icon={AiOutlineReload}
                title="Reload"
                text="Reload"
                aria-label="Reload"
                onClick={() => handleReload()}
              />

              <Button
                fontSize={[1]}
                icon={BiLinkExternal}
                padding={[2]}
                text="Open"
                tone="primary"
                onClick={() => window.open(privateUrl)}
              />
            </Flex>
          </Flex>
        </Card>
        <Card tone="transparent" padding={0} style={{ height: `100%` }}>
          <Flex align="center" justify="center" style={{ height: `100%` }}>
            <iframe
              key={id}
              ref={iframe}
              title="preview"
              style={{ width: '100%', height: `100%`, maxHeight: `100%`, border: 0 }}
              src={privateUrl}
              referrerPolicy="origin-when-cross-origin"
            />
          </Flex>
        </Card>
      </Flex>
    </ThemeProvider>
  );
};
