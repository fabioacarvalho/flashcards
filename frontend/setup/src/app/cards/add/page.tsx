'use client'

import { useState } from "react";
import styles from "./page.module.css";
import Input from "@/components/Input/Input";
import useIndex from "@/data/hooks/pages/useIndex.page";

export default function Page() {
  const { handlePostCard } = useIndex();
  const today = new Date();

  const [formData, setFormData] = useState({ 
    front: "",
    back: "",
    picture: "",
    lastLevel: "good",
    daysLastView: 1,
    study: true,
    nextView: today.toISOString().split('T')[0],
    updatedAt: today.toISOString().split('T')[0],
    content: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function register(){
    if(formData.front && formData.back) {
      console.log(formData)
      handlePostCard(formData)
    }
  }

  return (
    <div className={styles.container}>
      <h1>Add new Card</h1>
      <form>
            <Input
                label="Front"
                name="front"
                value={formData.front}
                onChange={handleChange}
                placeholder="Enter your text that shloud be in frontside of card"
                required
            />
            <Input
                label="Back"
                name="back"
                value={formData.back}
                onChange={handleChange}
                type="text"
                placeholder="Enter your text that shloud be in backside of card"
                required
            />
            <button onClick={register} className={styles.buttonDesign1}>
                Register
            </button>
        </form>
    </div>
  );
}