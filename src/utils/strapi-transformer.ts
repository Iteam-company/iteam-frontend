export interface DataInterface<Entity> {
    id: number;
    attributes: Entity;
}

export const strapiTransformer = <EntityT>(
    data: DataInterface<EntityT>,
): EntityT => {
    return { ...data.attributes };
};
