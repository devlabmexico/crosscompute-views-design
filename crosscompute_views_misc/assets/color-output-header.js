async function refreshColorPicker(elementId, dataUri, dataValue) {
  let d = dataValue;

  if (d === undefined) {
    try {
      const r = await fetch(dataUri);
      const text = await r.text();
      console.log(text)
      d = text;
    } catch (e) {
      console.log(e)
      return;
    }
  }

  Coloris({
    alpha: true,
    themeMode: 'auto',
    el: `#${elementId}`,
    format: 'mixed',
  });
}