from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    # Registrar el blueprint
    from .routes import bp as main_bp
    app.register_blueprint(main_bp)

    return app