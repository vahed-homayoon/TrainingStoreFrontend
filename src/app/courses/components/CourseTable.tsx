import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import Link from 'next/link';

type Course = {
    id: string;
    name: string;
    price: number;
    category: string;
};

type CourseTableProps = {
    courses: Course[];
    onDelete: (id: string) => void;
};

const CourseTable = ({ courses, onDelete }: CourseTableProps) => {
    const actionBodyTemplate = (rowData: Course) => {
        return (
            <div>
                <Link href={`/courses/edit/${rowData.id}`}>
                    <Button label="Edit" className="p-button-warning mr-2" />
                </Link>
                <Button
                    label="Delete"
                    className="p-button-danger"
                    onClick={() => onDelete(rowData.id)}
                />
            </div>
        );
    };

    return (
        <DataTable value={courses} paginator rows={10} className="p-datatable-sm">
            <Column field="name" header="Name" sortable></Column>
            <Column field="price" header="Price" sortable></Column>
            <Column field="category" header="Category" sortable></Column>
            <Column body={actionBodyTemplate} header="Actions"></Column>
        </DataTable>
    );
};

export default CourseTable;