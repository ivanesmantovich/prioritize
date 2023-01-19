type ColumnTitleProps = {
    title: string
}

export default function ColumnTitle({ title }: ColumnTitleProps) {
    return (
        <div className="font-semibold pt-2 px-4 pb-3">
            { title }
        </div>
    )
}