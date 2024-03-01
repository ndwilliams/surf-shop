const isBargain = (inventoryItem) => {
	let returnValue = false

	if (inventoryItem.price < 50.0) {
		returnValue = true
	}

	return returnValue
}

const isClothing = (item) => {
	let returnValue = false

	if (item.type === "clothing") {
		returnValue = true
	}

	return returnValue
}

const isSurfboard = (item) => {
	let returnValue = false

	if (item.type === "surfboard") {
		returnValue = true
	}

	return returnValue
}

const isGear = (gear) => {
	let returnValue = false

	if (gear.type === "gear") {
		returnValue = true
	}

	return returnValue
}

const convertDataForAccounting = (product) => {
	const allUpperCase = `${product.description.toUpperCase()} - ${product.type.toUpperCase()} - ${
		product.price
	}`
	return allUpperCase
}

const calculateAveragePrice = (products) => {
	let allPrices = 0
	for (product of products) {
		allPrices = allPrices + product.price
	}
	const averagePrice = allPrices / products.length
	return averagePrice
}

module.exports = {
	isBargain,
	isClothing,
	isGear,
	isSurfboard,
	convertDataForAccounting,
	calculateAveragePrice,
}
