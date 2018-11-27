export const getProductPriceRange = (product) => {
    return product.variants.reduce((acc, variant) => {
        if (acc.length === 0) {
            return [variant.price, variant.price];
        }
        return [Math.min(acc[0], variant.price), Math.max(acc[1], variant.price)];
    }, [])
}
