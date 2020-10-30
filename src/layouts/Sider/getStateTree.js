// helpers
import has from 'lodash/has';
import join from 'lodash/join';
import find from 'lodash/find';
import cloneDeep from'lodash/cloneDeep';
import dropRight from 'lodash/dropRight';

const getStateTree = (states=[], rootLevel=1) => {
    const nodes = cloneDeep(states);

    nodes.forEach(n => {
        const names = n.name.split('.');

        n._children = [];
        n._level = names.length;

        if(n._level > rootLevel)
            n._parent = join(dropRight(names),'.');
    });

    nodes.forEach(n => {
        if (!n || !n._parent) return;
        const parentNode = find(nodes, ['name', n._parent]);
        if (!parentNode) return;
        parentNode._children.push(n);
        n._parent = parentNode.name;
    });

    return nodes.filter((node) => !has(node, '_parent'));
};

export default getStateTree;