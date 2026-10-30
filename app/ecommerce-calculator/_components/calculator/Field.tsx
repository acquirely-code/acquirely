import { FIELDS, type FieldName } from "@/app/ecommerce-calculator/_lib/calculator-engine";
import type { Formatter } from "@/app/ecommerce-calculator/_lib/format";

export interface FieldHandlers {
  onChange: (name: FieldName, value: string) => void;
  onBlur: (name: FieldName) => void;
}

interface FieldProps extends FieldHandlers {
  name: FieldName;
  label: React.ReactNode;
  help?: React.ReactNode;
  value: string;
  error: string | null | undefined;
  f: Formatter;
  /** Overrides the default "<name>-help <name>-err". */
  describedBy?: string;
  children?: React.ReactNode;
}

/** One numeric input with its currency / % affix, help text and inline error. */
export function Field({ name, label, help, value, error, f, describedBy, children, onChange, onBlur }: FieldProps) {
  const kind = FIELDS[name].kind;
  return (
    <div className={"field" + (error ? " invalid" : "")}>
      <label htmlFor={name}>
        {label}{" "}
        {kind === "money" && <span className="sr-only">in {f.name}</span>}
        {kind === "percent" && <span className="sr-only">in percent</span>}
      </label>
      <div className="control">
        {kind === "money" && <span className="affix pre" aria-hidden="true">{f.symbol}</span>}
        <input
          id={name}
          name={name}
          type="text"
          inputMode={kind === "count" ? "numeric" : "decimal"}
          value={value}
          aria-describedby={describedBy ?? `${name}-help ${name}-err`}
          aria-invalid={error ? true : undefined}
          onChange={(e) => onChange(name, e.target.value)}
          onBlur={() => onBlur(name)}
        />
        {kind === "percent" && <span className="affix suf" aria-hidden="true">%</span>}
      </div>
      {children}
      {help && <p className="help" id={`${name}-help`}>{help}</p>}
      <p className="err" id={`${name}-err`}>{error || ""}</p>
    </div>
  );
}
