async function fetchPropertyNames() {
    try {
      const response = await fetch('https://static.ui.com/fingerprint/ui/public.json');
      const data = await response.json();
      const propertyNames = new Set<string>();
      data.devices.forEach((device: {[key: string]: any}) => {
        Object.keys(device).forEach((key) => propertyNames.add(key));
      });
      console.log(propertyNames);
    } catch (error) {
      console.error(error);
    }
  }
  
  export default fetchPropertyNames;
  