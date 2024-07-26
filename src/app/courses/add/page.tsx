import Layout from '@/components/layout/Layout';
import React from 'react'
// import { useRouter } from 'next/router';
import CourseForm from '../_components/CourseForm';

const page = () => {
    // const router = useRouter();

    const addCourse = async (data: any) => {
        // await fetch('/api/addCourses', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // });
        // router.push('/');
    };

    return (
        <Layout>
            <h1 className="text-2xl mb-4">Add Course</h1>
            <CourseForm onSubmit={addCourse} />
        </Layout>
    );
}

export default page