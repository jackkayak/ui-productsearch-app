// API Fetch works on version: version":"a2d137ec650a3ebb4690f874936abd89c634d2fa"
// for future use, use either my util.ts file in Api folder or https://jsonformatter.curiousconcept.com/#
// to see clearly expand json file. 
export interface Device {
  id: string;
  name: string;
  iconId: string;
  lineId: string;
  lineName: string;
  resolutions: Array<string>;
  product: string;
  shortnames: Array<string>;
  numberOfPorts: number;
  maxSpeedMegabitsPerSecond: number;
  maxPower: number;
}

async function fetchData(): Promise<Array<Device>> {
  const response = await fetch('https://static.ui.com/fingerprint/ui/public.json');
  const data = await response.json();
  const devices: Array<Device> = [];
  data.devices.forEach((device: {[key: string]: any}) => {
    const { id, name, shortnames } = device;
    const iconId = device.icon.id;
    const lineId = device.line.id;
    const lineName = device.line.name;
    const resolutions = device.icon.resolutions;
    const shortnamesArr = Array.isArray(shortnames) ? shortnames : [shortnames];
    const ngRadio = device.unifi?.network?.radios?.ng; // Get ng radio data

    const numberOfPorts = device.unifi?.network?.numberOfPorts; // Get numberOfPorts
    const maxSpeedMegabitsPerSecond = ngRadio?.maxSpeedMegabitsPerSecond; // Get maxSpeedMegabitsPerSecond from ng
    const maxPower = ngRadio?.maxPower; // Get maxPower from ng


    devices.push({ id, name, iconId, shortnames: shortnamesArr, lineId, lineName, resolutions, product: device.product.name, numberOfPorts, maxSpeedMegabitsPerSecond, maxPower });
  });

  console.log(devices);

  // Log all devices
  function logDevices() {
    devices.forEach((device: Device) => {
      console.log(device);
    });
  }
  logDevices();

  return devices;
}


export default fetchData;
