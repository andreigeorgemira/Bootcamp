# Ejercicio 2 Regexp - Andrei George Mira

## Comprueba si existen palabras repetidas en el siguiente ejercicio:

**coco coco cocodrilo coco cocodrilo cocodrilo**

Para ver que palabras se repiten (no cuantas ni cuales) lo podemos hacer con este regexp:
- \b(\w+)\b(?=.*\b\1\b)

Lo que hacemos es con \b, buscar palabras completas, es decir, tenemos coco y cocodrilo, sin el \b, 
nos cogeria coco, nos cogeria el coco de cocodrilo y nos cogeria cocodrilo, al aplicar \b, buscamos 
palabras completas, es decir coco y cocodrilo. En el otro grupo, lo unico que hacemos es buscar cualquier
palabra que coincida con el primer gurpo, por eso tenemos el \1 que hace regerencia al primero grupo, es decir
(\w+) y tambien verificamos que sean palabras completas con el \b

## Como seleccionar varias líneas
Hola Mundo 
Hola Mundo
### Encontrarlas mediante a grupos con reflexión y con el nombre del grupo sin \1 eliminar una de ellas y poner el texto con la primera letra de cada palabra en mayúsculas

**Patter:** (\w+)\s(\w+)\n(\1)\s(\2)
**Replace:** \u$1 \u$2 \n\u$3 \u$4
