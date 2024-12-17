import React, { useState } from 'react';
import { Box, Button, Link, SimpleGrid } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const ColorPicker = ({ colors, update, t }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const handleChange = () => {
    setDetailsOpen(prevState => !prevState);
  };

  const renderColors = (colorList) => {
    return colorList.map((color) => (
      <Link key={color} href="#" onClick={(e) => { e.preventDefault(); update(`#${color}`); }}>
        <Box
          as="span"
          border="1px solid #DDD"
          backgroundColor={`#${color}`}
          display="inline-block"
          width="20px"
          height="20px"
          margin="2px"
          title={`${t('label.hex_color')}: ${color}`}
        />
      </Link>
    ));
  };

  const topColorList = colors.slice(0, 11);
  const bottomColorList = colors.slice(11, 22);

  return (
    <Box margin="xx-small">
      <Button
        variant="link"
        size="sm"
        onClick={handleChange}
        leftIcon={detailsOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      >
        {detailsOpen ? t('label.hide_color_picker') : t('label.show_color_picker')}
      </Button>
      
      {detailsOpen && (
        <Box mt="2">
          <SimpleGrid columns={5} spacing="2">
            {renderColors(topColorList)}
          </SimpleGrid>
          <SimpleGrid columns={5} spacing="2" mt="2">
            {renderColors(bottomColorList)}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
};

export default ColorPicker;
