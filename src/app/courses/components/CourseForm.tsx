'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
// import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';

type CourseFormProps = {
    defaultValues?: CourseInput;
    onSubmit: (data: CourseInput) => void;
};

type CourseInput = {
    name: string;
    price: number;
    category: string;
};

const schema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    price: z.number().min(0, { message: "Invalid price" }),
    category: z.string().min(1, { message: "Category is required" }),
});

const categories = [
    { label: 'Electronics', value: 'electronics' },
    { label: 'Books', value: 'books' },
    { label: 'Clothing', value: 'clothing' },
];

const CourseForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<CourseInput>({
        resolver: zodResolver(schema),
        // defaultValues,
    });

    useEffect(() => {
        // if (defaultValues) {
        //     setValue('name', "1");
        //     setValue('price', 1);
        //     setValue('category', "1");
        // }
    }, [null, setValue]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <InputText
                    {...register('name')}
                    className={`mt-1 block w-full ${errors.name ? 'p-invalid' : ''}`}
                />
                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Price</label>
                {/* <InputNumber
                    {...register('price')}
                    className={`mt-1 block w-full ${errors.price ? 'p-invalid' : ''}`} 
                />*/}
                {errors.price && <p className="mt-2 text-sm text-red-600">{errors.price.message}</p>}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <Dropdown
                    options={categories}
                    {...register('category')}
                    className={`mt-1 block w-full ${errors.category ? 'p-invalid' : ''}`}
                />
                {errors.category && <p className="mt-2 text-sm text-red-600">{errors.category.message}</p>}
            </div>
            <Button type="submit" label="Submit" className="p-button-success" />
        </form>
    );
};

export default CourseForm;
