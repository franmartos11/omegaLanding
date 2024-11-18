"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const StatsComponent = () => {
    const stats = [
        { label: "PRODUCTOS ÚNICOS", value: 1000 },
        { label: "CLIENTES SATISFECHOS", value: 500 },
        { label: "PEDIDOS ENTREGADOS", value: 5000 },
    ];

    const [visible, setVisible] = useState(false);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            setVisible(true);
        }
    }, [inView]);

    return (
        <section
            ref={ref}
            className="py-12 px-4 text-center bg-white flex justify-center items-center gap-12"
        >
            {stats.map((stat, index) => (
                <StatCard
                    key={index}
                    label={stat.label}
                    value={stat.value}
                    visible={visible}
                />
            ))}
        </section>
    );
};

const StatCard = ({
    label,
    value,
    visible,
}: {
    label: string;
    value: number;
    visible: boolean;
}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (visible) {
            let start = 0;
            const duration = 2000; // Duración de la animación en milisegundos
            const increment = Math.ceil(value / (duration / 50)); // Incremento por frame

            const interval = setInterval(() => {
                start += increment;
                if (start >= value) {
                    start = value;
                    clearInterval(interval);
                }
                setCount(start);
            }, 50);

            return () => clearInterval(interval);
        }
    }, [visible, value]);

    return (
        <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-orange-500">+{count}</span>
            <span className="text-lg font-medium text-gray-700">{label}</span>
        </div>
    );
};

export default StatsComponent;
