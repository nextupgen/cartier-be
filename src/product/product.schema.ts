import { Schema } from 'mongoose';

// type MaterialType = 'WHITE_GOLD' | 'YELLOW_GOLD' | 'ROSE_GOLD' | 'PLATINUM';

const ProductSchema = new Schema({
		name: String,
		subtitle: String,
		size: [Number],
		price: Number,
		unit: String,
		defaultImage: String,
		material: [
			{
				image: Array<String>,
				materialType: String,
			},
		],
	});
	
export default ProductSchema;