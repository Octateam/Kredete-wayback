interface EmptyStateProps {
  title: string
  description: string
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-neutral-300 px-6 py-20 text-center dark:border-neutral-800">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-400 dark:bg-neutral-900 dark:text-neutral-600">
        <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v4c0 .199.079.39.22.53l2.5 2.5a.75.75 0 1 0 1.06-1.06l-2.28-2.28V6.75Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{title}</p>
      <p className="max-w-xs text-sm text-neutral-400 dark:text-neutral-600">{description}</p>
    </div>
  )
}
