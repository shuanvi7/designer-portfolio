import { IBaseTypes } from "@/types/BaseTypes"

export function Section({ children, className }: IBaseTypes) {
  return <div className={ className }>{children}</div>
}
