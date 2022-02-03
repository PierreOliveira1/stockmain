const maskCurrency = (value: string): string => {
	value = value.replace(/\D/g, '');
	if(value.length > 3) value = value.replace(/^0/g, '');
	if(value.length < 3) value = '0' + value;
	value = value.replace(/(\d)(\d{2})$/g, '$1,$2');
	value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');
	value = "R$ " + value;
	return value;
};

const unmaskCurrency = (value: string): number => {
	value = value.replace(/\D/g, '');
	value = value.replace(/(\d)(\d{2})$/g, '$1.$2');
	return Number(value);
};

export { maskCurrency, unmaskCurrency };
