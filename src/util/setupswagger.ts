import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function setupSwagger(app: INestApplication): void {
    const options = new DocumentBuilder()
    .setTitle('fucking title')
    .setDescription('nestjs fucking API')
    .setVersion('6.1.9')
    .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('', app, document);
}