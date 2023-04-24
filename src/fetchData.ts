export interface Device {
  id: string;
  name: string;
  iconId: string;
  lineId: string;
  lineName: string;
  resolutions: Array<string>;
  product: string;
}

async function fetchData(): Promise<Array<Device>> {
  const response = await fetch('https://static.ui.com/fingerprint/ui/public.json');
  const data = await response.json();
  const devices: Array<Device> = [];
  data.devices.forEach((device: {[key: string]: any}) => {
    const { id, name, } = device;
    const iconId = device.icon.id;
    const lineId = device.line.id;
    const lineName = device.line.name;
    const resolutions = device.icon.resolutions;
    devices.push({ id, name, iconId, lineId, lineName, resolutions, product: device.product.name });
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
