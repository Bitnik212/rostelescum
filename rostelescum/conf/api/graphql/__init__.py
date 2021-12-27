import graphene
from graphene import ObjectType

from .query import Query
schema = graphene.Schema(query=Query)
