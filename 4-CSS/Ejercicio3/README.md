# Prioridades de CSS

**Reglas de especificidad en CSS**

- `!important` (siempre sobrescribe cualquier otra regla)
  - Especificidad: `(0, 1, 0, 0)`

- `#titulo`
  - Especificidad: `(0, 1, 0, 0)`

- `.container[href]`
  - Especificidad: `(0, 0, 1, 1)`

- `.container`
  - Especificidad: `(0, 0, 1, 0)`

- `h1`
  - Especificidad: `(0, 0, 0, 1)`

- `*` (selector universal)
  - Especificidad: `(0, 0, 0, 0)`
