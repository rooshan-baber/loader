Custom Loader in Angular 15
Project Description:
This project demonstrates the implementation of a custom loader in Angular 15. The loader is designed to show a loading spinner when making HTTP requests and hide it once the request is complete. The loader is implemented as an HTTP interceptor and utilizes Angular's RxJS and Material Design components.

Features:
Loader Interceptor: The LoaderInterceptor intercepts HTTP requests and responses to control the display of the loader.

Custom Spinner Component: The SpinnerComponent displays a loading spinner and allows you to manually trigger it with a button click.

Loader Service: The LoaderService keeps track of the number of active API requests and controls the visibility of the loader.

Usage:
To use this loader in your Angular application, follow these steps:

Import the LoaderInterceptor into your app module and add it to the HTTP_INTERCEPTORS providers.

Include the <app-spinner></app-spinner> tag in your application's HTML to display the loader component.

You can manually trigger the loader by calling this.loader.showLoader() and hide it using this.loader.hideLoader() in your components.

Customize the loader's appearance and behavior in the spinner.component.html and loader.service.ts files to match your project's requirements.