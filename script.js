// Universal Measurement Converter
// Each linear unit is stored as a multiplier relative to the category's base unit.
// Temperature uses custom conversion functions.

const units = {
  Length: {
    base: "meter",
    units: {
      meter: { name: "Meter (m)", factor: 1 },
      kilometer: { name: "Kilometer (km)", factor: 1000 },
      centimeter: { name: "Centimeter (cm)", factor: 0.01 },
      millimeter: { name: "Millimeter (mm)", factor: 0.001 },
      micrometer: { name: "Micrometer (µm)", factor: 0.000001 },
      nanometer: { name: "Nanometer (nm)", factor: 1e-9 },
      mile: { name: "Mile (mi)", factor: 1609.344 },
      yard: { name: "Yard (yd)", factor: 0.9144 },
      foot: { name: "Foot (ft)", factor: 0.3048 },
      inch: { name: "Inch (in)", factor: 0.0254 },
      nauticalMile: { name: "Nautical mile (nmi)", factor: 1852 },
      lightYear: { name: "Light-year (ly)", factor: 9.460730472e15 }
    }
  },

  Area: {
    base: "squareMeter",
    units: {
      squareMeter: { name: "Square meter (m²)", factor: 1 },
      squareKilometer: { name: "Square kilometer (km²)", factor: 1e6 },
      squareCentimeter: { name: "Square centimeter (cm²)", factor: 1e-4 },
      squareMillimeter: { name: "Square millimeter (mm²)", factor: 1e-6 },
      squareMile: { name: "Square mile (mi²)", factor: 2589988.110336 },
      squareYard: { name: "Square yard (yd²)", factor: 0.83612736 },
      squareFoot: { name: "Square foot (ft²)", factor: 0.09290304 },
      squareInch: { name: "Square inch (in²)", factor: 0.00064516 },
      hectare: { name: "Hectare (ha)", factor: 10000 },
      acre: { name: "Acre (ac)", factor: 4046.8564224 }
    }
  },

  Volume: {
    base: "liter",
    units: {
      liter: { name: "Liter (L)", factor: 1 },
      milliliter: { name: "Milliliter (mL)", factor: 0.001 },
      cubicMeter: { name: "Cubic meter (m³)", factor: 1000 },
      cubicCentimeter: { name: "Cubic centimeter (cm³)", factor: 0.001 },
      cubicFoot: { name: "Cubic foot (ft³)", factor: 28.316846592 },
      cubicInch: { name: "Cubic inch (in³)", factor: 0.016387064 },
      gallonUS: { name: "US gallon (gal)", factor: 3.785411784 },
      quartUS: { name: "US quart (qt)", factor: 0.946352946 },
      pintUS: { name: "US pint (pt)", factor: 0.473176473 },
      cupUS: { name: "US cup", factor: 0.2365882365 },
      fluidOunceUS: { name: "US fluid ounce (fl oz)", factor: 0.0295735295625 },
      tablespoonUS: { name: "US tablespoon", factor: 0.01478676478125 },
      teaspoonUS: { name: "US teaspoon", factor: 0.00492892159375 },
      gallonImperial: { name: "Imperial gallon", factor: 4.54609 },
      fluidOunceImperial: { name: "Imperial fluid ounce", factor: 0.0284130625 }
    }
  },

  Mass: {
    base: "kilogram",
    units: {
      kilogram: { name: "Kilogram (kg)", factor: 1 },
      gram: { name: "Gram (g)", factor: 0.001 },
      milligram: { name: "Milligram (mg)", factor: 1e-6 },
      microgram: { name: "Microgram (µg)", factor: 1e-9 },
      metricTon: { name: "Metric ton (t)", factor: 1000 },
      pound: { name: "Pound (lb)", factor: 0.45359237 },
      ounce: { name: "Ounce (oz)", factor: 0.028349523125 },
      stone: { name: "Stone (st)", factor: 6.35029318 },
      shortTon: { name: "US short ton", factor: 907.18474 },
      longTon: { name: "Imperial long ton", factor: 1016.0469088 }
    }
  },

  Temperature: {
    special: true,
    units: {
      celsius: { name: "Celsius (°C)" },
      fahrenheit: { name: "Fahrenheit (°F)" },
      kelvin: { name: "Kelvin (K)" },
      rankine: { name: "Rankine (°R)" }
    }
  },

  Time: {
    base: "second",
    units: {
      nanosecond: { name: "Nanosecond", factor: 1e-9 },
      microsecond: { name: "Microsecond", factor: 1e-6 },
      millisecond: { name: "Millisecond", factor: 0.001 },
      second: { name: "Second (s)", factor: 1 },
      minute: { name: "Minute (min)", factor: 60 },
      hour: { name: "Hour (h)", factor: 3600 },
      day: { name: "Day", factor: 86400 },
      week: { name: "Week", factor: 604800 },
      month30: { name: "30-day month", factor: 2592000 },
      year365: { name: "365-day year", factor: 31536000 }
    }
  },

  Speed: {
    base: "meterPerSecond",
    units: {
      meterPerSecond: { name: "Meter/second (m/s)", factor: 1 },
      kilometerPerHour: { name: "Kilometer/hour (km/h)", factor: 1000 / 3600 },
      milePerHour: { name: "Mile/hour (mph)", factor: 1609.344 / 3600 },
      footPerSecond: { name: "Foot/second (ft/s)", factor: 0.3048 },
      knot: { name: "Knot (kn)", factor: 1852 / 3600 }
    }
  },

  Pressure: {
    base: "pascal",
    units: {
      pascal: { name: "Pascal (Pa)", factor: 1 },
      kilopascal: { name: "Kilopascal (kPa)", factor: 1000 },
      megapascal: { name: "Megapascal (MPa)", factor: 1e6 },
      bar: { name: "Bar", factor: 100000 },
      millibar: { name: "Millibar (mbar)", factor: 100 },
      atmosphere: { name: "Standard atmosphere (atm)", factor: 101325 },
      psi: { name: "Pound/square inch (psi)", factor: 6894.757293168 },
      torr: { name: "Torr", factor: 101325 / 760 },
      mmHg: { name: "Millimeter mercury (mmHg)", factor: 133.322387415 }
    }
  },

  Energy: {
    base: "joule",
    units: {
      joule: { name: "Joule (J)", factor: 1 },
      kilojoule: { name: "Kilojoule (kJ)", factor: 1000 },
      megajoule: { name: "Megajoule (MJ)", factor: 1e6 },
      wattHour: { name: "Watt-hour (Wh)", factor: 3600 },
      kilowattHour: { name: "Kilowatt-hour (kWh)", factor: 3.6e6 },
      calorie: { name: "Calorie (cal)", factor: 4.184 },
      kilocalorie: { name: "Kilocalorie (kcal)", factor: 4184 },
      BTU: { name: "British thermal unit (BTU)", factor: 1055.05585262 },
      footPound: { name: "Foot-pound (ft·lbf)", factor: 1.3558179483 }
    }
  },

  Power: {
    base: "watt",
    units: {
      watt: { name: "Watt (W)", factor: 1 },
      kilowatt: { name: "Kilowatt (kW)", factor: 1000 },
      megawatt: { name: "Megawatt (MW)", factor: 1e6 },
      horsepower: { name: "Mechanical horsepower (hp)", factor: 745.699871582 },
      metricHorsepower: { name: "Metric horsepower (PS)", factor: 735.49875 }
    }
  },

  Force: {
    base: "newton",
    units: {
      newton: { name: "Newton (N)", factor: 1 },
      kilonewton: { name: "Kilonewton (kN)", factor: 1000 },
      dyne: { name: "Dyne", factor: 1e-5 },
      kilogramForce: { name: "Kilogram-force (kgf)", factor: 9.80665 },
      poundForce: { name: "Pound-force (lbf)", factor: 4.4482216152605 }
    }
  },

  Acceleration: {
    base: "meterPerSecondSquared",
    units: {
      meterPerSecondSquared: { name: "Meter/second² (m/s²)", factor: 1 },
      footPerSecondSquared: { name: "Foot/second² (ft/s²)", factor: 0.3048 },
      standardGravity: { name: "Standard gravity (g)", factor: 9.80665 }
    }
  },

  Frequency: {
    base: "hertz",
    units: {
      hertz: { name: "Hertz (Hz)", factor: 1 },
      kilohertz: { name: "Kilohertz (kHz)", factor: 1000 },
      megahertz: { name: "Megahertz (MHz)", factor: 1e6 },
      gigahertz: { name: "Gigahertz (GHz)", factor: 1e9 }
    }
  },

  Data: {
    base: "byte",
    units: {
      bit: { name: "Bit (b)", factor: 0.125 },
      byte: { name: "Byte (B)", factor: 1 },
      kilobyte: { name: "Kilobyte (KB)", factor: 1000 },
      megabyte: { name: "Megabyte (MB)", factor: 1e6 },
      gigabyte: { name: "Gigabyte (GB)", factor: 1e9 },
      terabyte: { name: "Terabyte (TB)", factor: 1e12 },
      kibibyte: { name: "Kibibyte (KiB)", factor: 1024 },
      mebibyte: { name: "Mebibyte (MiB)", factor: 1024 ** 2 },
      gibibyte: { name: "Gibibyte (GiB)", factor: 1024 ** 3 },
      tebibyte: { name: "Tebibyte (TiB)", factor: 1024 ** 4 }
    }
  },

  Angle: {
    base: "degree",
    units: {
      degree: { name: "Degree (°)", factor: 1 },
      radian: { name: "Radian (rad)", factor: 180 / Math.PI },
      gradian: { name: "Gradian (gon)", factor: 0.9 },
      arcminute: { name: "Arcminute (′)", factor: 1 / 60 },
      arcsecond: { name: "Arcsecond (″)", factor: 1 / 3600 }
    }
  },

  FuelEconomy: {
    special: true,
    units: {
      kmPerLiter: { name: "Kilometers/liter (km/L)" },
      milesPerGallonUS: { name: "Miles/gallon US (mpg)" },
      milesPerGallonImperial: { name: "Miles/gallon Imperial (mpg)" },
      litersPer100km: { name: "Liters/100 km (L/100 km)" }
    }
  },

  Cooking: {
    base: "milliliter",
    units: {
      milliliter: { name: "Milliliter (mL)", factor: 1 },
      liter: { name: "Liter (L)", factor: 1000 },
      teaspoon: { name: "Teaspoon", factor: 4.92892159375 },
      tablespoon: { name: "Tablespoon", factor: 14.78676478125 },
      cupUS: { name: "US cup", factor: 236.5882365 },
      fluidOunceUS: { name: "US fluid ounce", factor: 29.5735295625 },
      pintUS: { name: "US pint", factor: 473.176473 },
      quartUS: { name: "US quart", factor: 946.352946 },
      gallonUS: { name: "US gallon", factor: 3785.411784 }
    }
  }
};

const categorySelect = document.getElementById("category");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const amount = document.getElementById("amount");
const result = document.getElementById("result");
const swapBtn = document.getElementById("swapBtn");
const categoryList = document.getElementById("categoryList");

const categoryNames = Object.keys(units);

categoryNames.forEach(category => {
  categorySelect.add(new Option(formatCategory(category), category));

  const chip = document.createElement("span");
  chip.className = "chip";
  chip.textContent = formatCategory(category);
  categoryList.appendChild(chip);
});

function formatCategory(name) {
  return name.replace(/([a-z])([A-Z])/g, "$1 $2");
}

function populateUnits() {
  const category = units[categorySelect.value];

  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  Object.entries(category.units).forEach(([key, unit]) => {
    fromUnit.add(new Option(unit.name, key));
    toUnit.add(new Option(unit.name, key));
  });

  if (toUnit.options.length > 1) {
    toUnit.selectedIndex = 1;
  }

  convert();
}

function convertTemperature(value, from, to) {
  let celsius;

  if (from === "celsius") celsius = value;
  else if (from === "fahrenheit") celsius = (value - 32) * 5 / 9;
  else if (from === "kelvin") celsius = value - 273.15;
  else if (from === "rankine") celsius = (value - 491.67) * 5 / 9;

  if (to === "celsius") return celsius;
  if (to === "fahrenheit") return celsius * 9 / 5 + 32;
  if (to === "kelvin") return celsius + 273.15;
  if (to === "rankine") return (celsius + 273.15) * 9 / 5;
}

function convertFuelEconomy(value, from, to) {
  // Convert everything through km/L.
  let kmPerLiter;

  if (from === "kmPerLiter") kmPerLiter = value;
  else if (from === "milesPerGallonUS") kmPerLiter = value * 0.4251437075;
  else if (from === "milesPerGallonImperial") kmPerLiter = value * 0.3540061899;
  else if (from === "litersPer100km") kmPerLiter = 100 / value;

  if (to === "kmPerLiter") return kmPerLiter;
  if (to === "milesPerGallonUS") return kmPerLiter / 0.4251437075;
  if (to === "milesPerGallonImperial") return kmPerLiter / 0.3540061899;
  if (to === "litersPer100km") return 100 / kmPerLiter;
}

function formatNumber(number) {
  if (!Number.isFinite(number)) return "Invalid conversion";
  return new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 12
  }).format(number);
}

function convert() {
  const value = Number(amount.value);

  if (!Number.isFinite(value)) {
    result.textContent = "Enter a number";
    return;
  }

  const categoryName = categorySelect.value;
  const category = units[categoryName];
  const from = fromUnit.value;
  const to = toUnit.value;

  let converted;

  if (categoryName === "Temperature") {
    converted = convertTemperature(value, from, to);
  } else if (categoryName === "FuelEconomy") {
    if (value === 0 && to === "litersPer100km") {
      result.textContent = "∞";
      return;
    }
    converted = convertFuelEconomy(value, from, to);
  } else {
    const baseValue = value * category.units[from].factor;
    converted = baseValue / category.units[to].factor;
  }

  result.textContent = `${formatNumber(converted)} ${category.units[to].name}`;
}

swapBtn.addEventListener("click", () => {
  const oldFrom = fromUnit.value;
  fromUnit.value = toUnit.value;
  toUnit.value = oldFrom;
  convert();
});

categorySelect.addEventListener("change", populateUnits);
fromUnit.addEventListener("change", convert);
toUnit.addEventListener("change", convert);
amount.addEventListener("input", convert);

populateUnits();
