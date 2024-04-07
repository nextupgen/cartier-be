
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

type MaterialType = 'WHITE_GOLD' | 'YELLOW_GOLD' | 'ROSE_GOLD' | 'PLATINUM';
type UNIT_PRICE = "USD";
@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  subtitle: string;

  @Prop()
  size: Array<number>;

	@Prop()
	price: number;

	@Prop()
	unit_price: UNIT_PRICE;

	@Prop()
	defaultImage: string;

	@Prop()
	material: Array<{
		image: Array<string>;
		materialType: MaterialType;
	}>;

}

export const ProductSchema = SchemaFactory.createForClass(Product);
