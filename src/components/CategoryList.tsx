"use client";

import React, { useEffect, useState } from "react";
import * as Icons from "react-icons/fa";

type Category = {
  name: string;
  icon: string;
};

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories.map((cat) => {
        const Icon = (Icons as any)[cat.icon] || Icons.FaQuestion;

        return (
          <div
            key={cat.name}
            className="flex items-center gap-2 p-4 border rounded-xl shadow-sm bg-white dark:bg-gray-900"
          >
            <Icon className="text-2xl" />
            <span className="text-lg font-medium">{cat.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
