import React, { useEffect } from 'react';

const App: React.FC = () => {

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://static.ui.com/fingerprint/ui/public.json');
        const data = await response.json();
        const obj = data.devices[0];
        const properties: string[] = Object.keys(obj);
        console.log(properties);
      } catch (error) {
        console.error(error);
      }
    }

    /* 9 property names in object: 0. sysids 1. icon 2. line 3. guids 4. 
  uisp 5. id 6. product 7. shortnames 8. triplets */

    fetchData();
  }, []);

  return (
    <div>
      {/* components */}
    </div>
  );
}

export default App;
