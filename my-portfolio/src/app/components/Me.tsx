import Image from "next/image";

type MeProps = {
    className?: string;
};

export default function Me({ className }: MeProps) {
    return (
        <div className={className ?? ""}>
            <Image
                src="/images/me.png"
                alt="Portrait"
                width={800}
                height={100}
                className={`object-contain h-auto w-auto ${className ?? ""}`}
                priority
            />
        </div>
    )
}