import { BaseTypes } from "@/src/types/BaseTypes"

export function Section({ children, className }: BaseTypes) {
  return <div className={ className }>{children}</div>
}
