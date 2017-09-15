const regex = {
	id: new RegExp(/id\=\"([a-zA-Z0-9]+)\"/),
	name: new RegExp(/name\=\"([a-zA-Z0-9]+)\"/),
	required: new RegExp(/required\=\"([a-zA-Z0-9]+)\"/),
	type: new RegExp(/type\=\"([a-zA-Z0-9]+)\"/),
	inputs: new RegExp(
		/\<(input|textarea|select)[\sa-zA-Z0-9\=\"\-\(\)\;\:\/\,\&]+\>/g
	)
};

export default regex;
