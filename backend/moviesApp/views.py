from django.shortcuts import render
from rest_framework import viewsets, status
from .serializers import MovieSerializer
from .models import Movie
from rest_framework.decorators import api_view
from rest_framework.response import Response


class MoviesView(viewsets.ModelViewSet):
    serializer_class = MovieSerializer
    queryset = Movie.objects.all()
