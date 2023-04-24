async function fetchData() {
    const response = await fetch('https://static.ui.com/fingerprint/ui/public.json');
    const data = await response.json();
    const propertyNames = new Set<string>();
    data.devices.forEach((device: {[key: string]: any}) => {
      console.log(device); // log each device object to console
      Object.keys(device).forEach((key) => propertyNames.add(key));
    });
    console.log(propertyNames);
  }
  
  export default fetchData;
  