registerFunction('{{variable_id}}', async function({v}) {
  await qrSelector('{{element_id}}', '{{data_uri}}', v);
});
refreshVariable('{{ variable_id }}', {{value}});
