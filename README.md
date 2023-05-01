# json file used: https://static.ui.com/fingerprint/ui/public.json

Before I forget: 
Update more prop values adding to the fetch then over to the product page.


If results = none, currently it goes blank and user can only refresh page to get back ontrack, need to produce a error sign with good ux to get the user on track. 
Possibly work on mobile responsive
Possibly make more transitions to make product smoother to use
Run api tests to handle
triple check css with figma file for each page
on product page try to add sku or also add area to copy the link so employees can easily share, look up how to make button copy link. 
Maybe make the devices or the logo clickable to bring back to list.

Create Todo for another developer to drive it to the finish line. Organize readme with markdown.


***
# JSON file Fetch Unfinished Chart

# Property Name Chart (entries)   # Actual Property value

0. "sysids"                       NA

1. "icon"                         device id/resolution !how you access individual product pictures

2. "line"                         name/id !For Filtering Devices EX: Product line: Object { name: "UniFi Protect", id: "unifi-protect" }

3. "guids"                        array

4. "uisp"                         NA

5. "id"                           NA

6. "product"                      abbrev/name !Name for each product, use in combo with 2. line id/name EX:  Object { abbrev: "USP PDU Pro", name: "SmartPower PDU Pro" }

7. "shortnames"                   Array EX: Array(3) [ "UDM-PRO", "UDM-Pro", "UDMPRO" ]

8. "triplets"                     NA

9. "sysid"                        NA

10. "btle"                        factoryDefault userConfigured

11. "jrf"                         NA
12. "jpa"                         NA
13. "unifi"                       holds numberOfPorts,ethernetMaxSpeedMegabitsPerSecond, capacity (power) 
14. "fcc"                         Compliant
15. "ic"                          Compliant
16. "is_service"                  NA
17. "deviceType"                  


# Product Page or Devices/ Open  
* icon (1)                          
* Product Line (2)
* ID (2)
* Name (6)
* Short Name (7)
** If applicable
* Max. Power(13)
* Speed (13)
* Number of ports (13)

# Devices List
* icon (1)  
* Product Line (2)
* ID (2)
* Name (6)
and number of results *

# Devices Grid
* icon (1)
* Product Line (2)
* ID (2)
* Name (6)
and number of results *

# filter menu
* Product Line (2)
Could add icon (1) for more personalized searching or more filters *