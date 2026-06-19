import { InputHTMLAttributes, LabelHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

export const baseFieldClasses =
  "w-full rounded-md border border-navy-950/15 bg-white px-3 py-2 text-sm text-navy-950 placeholder:text-navy-950/40 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100";

export function Label({ className = "", ...rest }: LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={`mb-1 block text-sm font-medium text-navy-950 ${className}`} {...rest} />;
}

export function Input({ className = "", ...rest }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`${baseFieldClasses} ${className}`} {...rest} />;
}

export function Textarea({ className = "", ...rest }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={`${baseFieldClasses} ${className}`} {...rest} />;
}

export function Select({ className = "", ...rest }: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={`${baseFieldClasses} ${className}`} {...rest} />;
}
