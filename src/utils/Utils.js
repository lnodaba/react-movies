class Utils {

     /**
      * Applies the function to each element of the list and pushes the result into a result array, 
      * handy for rendering a list of components. 
      * @param list The Iterable the function will traverse
      * @param func Function wich will be aplied for each eleent from list
      */
    renderList(list,func) {
        let array = []
        if (list === undefined) {
            return array;
        }

        return list
            .map((value) => { return func(value);})
    }

}

export default Utils;