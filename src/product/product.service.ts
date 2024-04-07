import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async create(createdProductDto: Product): Promise<Product> {
    const newProduct = new this.productModel(createdProductDto);
    return newProduct.save();
  }

    async findAll(): Promise<Product[]> {
      return await this.productModel.find().exec();
    }
  
    async findOne(id: string): Promise<Product | null> {
      return await this.productModel.findOne({ _id: id });
    }
  
    async update(id: string, product: Product): Promise<Product| null> {
      return await this.productModel.findByIdAndUpdate(id, product, { new: true });
    }
  
    async delete(id: string): Promise<boolean> {
     const result = await this.productModel.deleteOne({ _id: id });
      return result.deletedCount > 0;
    }
}
