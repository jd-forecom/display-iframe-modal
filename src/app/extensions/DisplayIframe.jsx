import { Link, Button, Text, Box, Flex, hubspot } from "@hubspot/ui-extensions";

// Define the extension to be run within the Hubspot CRM
hubspot.extend((
  { actions } // serverless function is not required for simply displaying an iframe
) => <Extension openIframe={actions.openIframeModal} />);

// Define the Extension component, taking in openIframe as a prop
const Extension = ({ openIframe }) => {
  const handleClick = () => {
    openIframe({
      uri: "https://www.calculator.net/scientific-calculator.html", // this is a relative link. Some links will be blocked since they don't allow iframing
      height: 720,
      width: 1280,
      title: 'Deal calculator',
      flush: true,
    });
  };

  return (
    <>
      <Flex direction="column" align="start" gap="medium">
        <Text>
          Clicking the button will open a modal with your cpq calculator.
        </Text>

        <Box>
          <Button type="submit" onClick={handleClick}>
            Open calculator
          </Button>
        </Box>
      </Flex>
    </>
  );
};