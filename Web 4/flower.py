# from flask import Flask, jsonify, request, session
# from flask_sqlalchemy import SQLAlchemy
# from flask_cors import CORS, cross_origin

# app = Flask(__name__)
# CORS(app)
# cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///car.db'
# db = SQLAlchemy(app)

# class Flower(db.Name):
#     name = db.Column(db.String(50), primary_key = True)
#     color = db.Column(db.String(50))
#     height = db.Column(db.Integer)
#     price = db.Column(db.Integer)

# @app.route('/view', methods=['POST'])
# @cross_origin()
# def contain_flowers():
#     if request.method == 'POST':
#         data = request.get_json()
#         flowers = data.get('flowers')
#         session['flowers'] = flowers
#         return jsonify({'message': 'Flowers got successfully'})

# @app.route('/add', methods=['POST'])
# @cross_origin()
# def create_flower():
#     if request.method == 'POST':
#         data = request.get_json()
#         flowers = data.get('flowers')

#         for flower in flowers:
#             new_flower = Flower(name=flower.get('name'), color=flower.get('color'), height=flower.get('height'), price=flower.get('price'))
#             existing_flower = Flower.query.filter_by(name=flower.get('name')).first
#             if not existing_flower:
#                 db.session.create(new_flower)
#         db.session.commit()
#         return jsonify({'message': 'Flowers created successfully'})
    
# @app.route('/add', methods=['GET'])
# @cross_origin()
# def get_flower_on_create():
#     flowers = session.get('flowers')
#     for flower in flowers:
#         return jsonify({'name': flower.get('name'),
#                         'color': flower.get('color'),
#                         'height': flower.get('height'),
#                         'price': flower.get('price')
#                         })
    
# @app.route('/view', methods=['GET'])
# @cross_origin()
# def get_flower_on_index():
#     flowers = session.get('flowers')
#     for flower in flowers:
#         return jsonify({'name': flower.get('name'),
#                         'color': flower.get('color'),
#                         'height': flower.get('height'),
#                         'price': flower.get('price')
#                         })
    
# @app.route('/edit', methods=['GET'])
# @cross_origin()
# def get_flower_on_edit():
#     flowers = session.get('flowers')
#     for flower in flowers:
#         return jsonify({'name': flower.get('name'),
#                         'color': flower.get('color'),
#                         'height': flower.get('height'),
#                         'price': flower.get('price')
#                         })
    
# @app.route('/edit', methods=['POST'])
# @cross_origin
# def edit_flower():
#     if request.method == 'POST':
#         edited_flower = request.get_json()
#         older_version = Flower.query.filter_by(name=edited_flower.get('name')).first()
#         if older_version:
#             older_version.color = edited_flower.get('color')
#             older_version.height = edited_flower.get('height')
#             older_version.price = edited_flower.get('price')
    
# if __name__ == '__main__':
#     app.run(debug=True)